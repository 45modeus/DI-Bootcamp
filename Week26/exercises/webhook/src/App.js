import React from 'react';

function App() {

  const url = 'https://webhook.site/23991952-70fb-49f2-9d0a-156d49416f37';

  const sendData = async () => {
    const data = {
      key1: 'myusername',
      email: 'mail@gmail.com',
      name: 'Asmo',
      lasname: 'deus',
      age: 23,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log('Response from webhook:', result);
    } catch (error) {
      console.error('Error posting data:', error)
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Exercise 4: Post JSON Data</h2>
      <button onClick={sendData}>Send JSON Data</button>
    </div>
  );
}

export default App;
