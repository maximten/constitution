import type { NextPage } from 'next'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import {oldConstitution, newConstitution} from '../constants'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Изменения в конституции 2022</h1>
      <ReactDiffViewer 
        oldValue={oldConstitution} 
        newValue={newConstitution} 
        splitView={true} 
        compareMethod={DiffMethod.WORDS}
        codeFoldMessageRenderer={(number) => <span>{`Раскрыть ${number} строк...`}</span>}
        styles={{
          wordDiff: {
            padding: "0",
            display: "inline"
          }
        }}
      />      
    </div>
  )
}

export default Home
