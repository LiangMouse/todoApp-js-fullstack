import { Allotment } from "allotment";
import Siderbar from "@/components/siderbar";
import "allotment/dist/style.css"; 
import { Button } from "@/components/ui/button"

function App() {
  console.log("App")
  const handleToggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    } else {
      htmlElement.classList.add("dark");
    }
  } 
  return (
    <div className="w-full h-[100vh] bg-black">
    <Allotment className="h-[calc(100vh-2rem)] w-full dark:bg-red-500" >
      {/* 左侧面板 */}
      <Allotment.Pane minSize={200} maxSize={400} preferredSize={300} className="h-full">
        <div className="h-full bg-card p-4 rounded-lg">
          <Siderbar />
        </div>
      </Allotment.Pane>
      
      {/* 右侧面板 */}
      <Allotment.Pane>
        <div className="p-4 dark:invisible">主要内容区域</div>
        <Button onClick={handleToggleDarkMode} className="float-right w-4 h-4 dark:w-[30vh]" >暗黑模式</Button>
      </Allotment.Pane>
    </Allotment>  
    </div>
  )
}

export default App
