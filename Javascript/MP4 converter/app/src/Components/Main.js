import { useState } from 'react';
import Upload from './Upload';


function Main() {
  const [file, setFile] = useState(() => null);
  const [fileName, setFileName] = useState(() => null)

  function onFileUploaded() {
    setFile(document.querySelector('#file'));
    setFileName(document.querySelector('#file').value.split('\\')[2]);
  }

  return (
    <main className="Main">
      <div className="container">
        <form method="GET" action="/download" className="inputs">
          <Upload onFileUploaded={onFileUploaded} fileName={fileName}/>
          <input type="submit" id="submit" value="Converter"/>
        </form>
      </div>
    </main>
  )
}

export default Main
