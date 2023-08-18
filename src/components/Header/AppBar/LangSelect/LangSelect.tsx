import Select from 'react-select';


const options = [
  { value: 'eng', label: 'ENG' },
  { value: 'pl', label: 'PL' },
  { value: 'ua', label: 'UA' },
];

const LangSelect: React.FC = () => {
  return <Select options={options} />;
};

export default LangSelect;
