import { useState } from "react";
import ButtonTab from "./ButtonTab";
import CodeTab from "./CodeTab";
import { useSelector } from "react-redux";
import Preview from "./Preview";

const Tabs = () => {
  const tabState = useSelector((state) => state.tabs);
  const previewData = useSelector((state) => state.preview);
  const [tabIndex, setTabIndex] = useState(tabState[0].id);
  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabState.map((tab) => (
          <ButtonTab
            key={tab.id}
            id={tab.id}
            toggleTab={(id) => setTabIndex(id)}
            imgUrl={tab.imgUrl}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="w-full grow relative">
        <CodeTab
          id={tabIndex}
          code={tabState.find((obj) => obj.id === tabIndex).code}
        />
        {previewData.preview && <Preview />}
        <p>Le Code...</p>
      </div>
    </div>
  );
};

export default Tabs;
