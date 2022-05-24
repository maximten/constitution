import type { NextPage } from 'next'
import Head from 'next/head';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import {oldConstitution, newConstitution} from '../constants'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Изменения в конституции 2022</title>
      </Head>
      <h1>Изменения в конституции 2022</h1>
      <div className='info'>
        <a href="http://law.gov.kz/client/#!/doc/1/rus">Старая версия</a>
        <a href="https://kazpravda.kz/n/proekt-zakon-rk-o-vnesenii-izmeneniy-i-dopolneniy-v-konstitutsiyu-respubliki-kazahstan/">Правки</a>
        <a href="https://github.com/maximten/constitution">Github</a>
      </div>
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
