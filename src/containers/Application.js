import { useState } from 'preact/compat';
import { AppWrapper } from '../components/AppWrapper';
import { Audio } from '../components/Audio';
import { GROUP, QUEST_DATA } from '../constants';

export function Application() {
  const [currentStep, setCurrentStep] = useState(QUEST_DATA[GROUP.VAN_CANTO.label]);

  return (
    <AppWrapper id="app">
      <Audio audio={currentStep.audio} />

      <ul>
        {currentStep.variants.map((item) => (
          <li key={item.value}>
            <img src={item.image} alt={item.value} className="rounded img-fluid" style={{ objectFit: 'contain' }} />
            {item.value}
          </li>
        ))}
      </ul>
    </AppWrapper>
  );
}
