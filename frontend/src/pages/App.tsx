import { Allotment } from "allotment";
import Siderbar from "@/components/siderbar";
import "allotment/dist/style.css"; 
import { Button } from "@/components/ui/button"

function App() {
  console.log("App")
  return (
    <div className="w-full h-[100vh] bg-red-500">
    <Allotment className="h-[calc(100vh-2rem)] w-full m-4" >
      {/* 左侧面板 */}
      <Allotment.Pane minSize={200} maxSize={400} preferredSize={300} className="h-full">
        <div className="h-full bg-card p-4 rounded-lg">
          <Siderbar />
        </div>
      </Allotment.Pane>
      
      {/* 右侧面板 */}
      <Allotment.Pane>
        <div className="w-full h-full p-4">主要内容区域</div>
        <Button>Shadcn UI example</Button>
      </Allotment.Pane>
    </Allotment>
    </div>
  )
}

export default App
