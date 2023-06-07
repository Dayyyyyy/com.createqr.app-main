function InputUrl({ url, setUrl, httpRgx }) {
  const handleUrl = (e) => setUrl(e.target.value),
    handleClearUrl = () => setUrl('');

  return (
    <div className='input layout'>
      <label htmlFor='url'>Enter your URL</label>

      <input
        id='url'
        name='url'
        type='text'
        value={url}
        onChange={handleUrl}
        placeholder='Add URL for Qr Code generation'
        required
      />
    </div>
  );
}

export default InputUrl;
