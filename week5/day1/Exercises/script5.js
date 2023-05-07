const myDiv = document.getElementById('my-div');

      myDiv.addEventListener('click', () => {
        myDiv.style.left = `${Math.floor(Math.random() * 200)}px`;
      });

      myDiv.addEventListener('mouseover', () => {
        myDiv.style.top = `${Math.floor(Math.random() * 200)}px`;
      });

      myDiv.addEventListener('mouseout', () => {
        myDiv.style.backgroundColor = '#eee';
        myDiv.style.fontSize = '18px';
        myDiv.style.color = '#333';
      });

      myDiv.addEventListener('dblclick', () => {
        myDiv.style.backgroundColor = 'red';
        myDiv.style.fontSize = '24px';
        myDiv.style.color = '#fff';
      });
   