import { nanoid } from 'nanoid';
import { useMemo, useState } from 'preact/compat';
import { toast, ToastContainer } from 'react-toastify';
import { AppWrapper } from '../components/AppWrapper';
import { Audio } from '../components/Audio';
import { List } from '../components/List';
import { Success } from '../components/Success';
import { QUESTS } from '../constants';

import 'react-toastify/dist/ReactToastify.min.css';

export function Application() {
  const quests = useMemo(() => getQuests(), []);
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const currentQuest = useMemo(() => quests[currentStep], [currentStep]);

  const handleValidate = () => {
    if (answer === currentQuest.value) {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;

        if (nextStep > quests.length - 1) {
          setShowSuccess(true);

          return;
        }

        return prev + 1;
      });
      setAnswer(null);
    } else {
      toast.error('Wrong answer..');
    }

  };

  if (showSuccess) {
    return <Success />;
  }

  return (
    <AppWrapper id="app">
      <Audio audio={currentQuest.audio} key={currentQuest.audio} />

      <List currentQuest={currentQuest} answer={answer} onAnswer={setAnswer} />

      <button onClick={handleValidate} type="button" className="mt-3 btn btn-primary w-100"
              style={{ maxWidth: '50%' }}>Select</button>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss
                      draggable pauseOnHover theme="colored" />
    </AppWrapper>
  );
}

function getQuests() {
  return QUESTS.map((item) => ({
    ...item,
    id: nanoid(3),
    variants: item.variants.map((variant) => ({ ...variant, id: nanoid(3) })),
  }));
}
