function Upload({onFileUploaded, fileName}) {
  return (
    <div className="upload">
      <span>{fileName}</span>
      <button>Upload File</button>
      <input type="file" name="file" id="file" onChange={onFileUploaded}/>
    </div>
  )
}

export default Upload
