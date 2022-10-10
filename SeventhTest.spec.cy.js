it ('Example sending the GET request', ()=>{
        cy.request('https://account.mail.ru/api/v1/user/signup'
        ).then((response) => {
        console.log(response);
      });
}
);

it('Example sending the POST request', () => {
  
   const requestBody ={
        "password": {
            "value": null,
            "error": "required"
        },
        "domain": {
            "value": null,
            "error": "required"
        },
        "name": {
            "value": null,
            "error": "required"
        },
        "login": {
            "value": null,
            "error": "required"
        }
         
   } 
  cy.request({
    method: 'POST',
    url: 'https://account.mail.ru/api/v1/user/signup',
    body: requestBody}).then((response) => {
    console.log(response);
  });
});


it('Example sending the GET request', () => {
  cy.request('https://jsonplaceholder.typicode.com/posts/1').then(
    (response) => {
      console.log(response);
    }
  );
});

it('Example sending the POST request', () => {

  const bodyRequest={ title: 'foo',
    body: 'bar',
    userId: 1,}


  const headersBody={'Content-type': 'application/json; charset=UTF-8'}

  cy.request({
    method:'POST',
    url:'https://jsonplaceholder.typicode.com/posts',
    body: bodyRequest,
    headers: headersBody
  }).then((response) => {
    console.log(response);
  });
});

it('Example sending the PUT request', () => {
  const bodyRequest1 = { id: 1, title: 'foo', body: 'bar', userId: 1 };

  const headersBody1 = { 'Content-type': 'application/json; charset=UTF-8' };

  cy.request({
    method: 'PUT',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    body: bodyRequest1,
    headers: headersBody1,
  }).then((response) => {
    console.log(response);
  });
});

it('Example sending the PATCH request', () => {
  const bodyRequest2 = { title: 'foo' };

  const headersBody2 = { 'Content-type': 'application/json; charset=UTF-8' };

  cy.request({
    method: 'PATCH',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    body: bodyRequest2,
    headers: headersBody2,
  }).then((response) => {
    console.log(response);
  });
});


it('Example sending the DELETE request', () => {
  const bodyRequest2 = { title: 'foo' };

  const headersBody2 = { 'Content-type': 'application/json; charset=UTF-8' };

  cy.request({
    method: 'DELETE',
    url: 'https://jsonplaceholder.typicode.com/posts/1'    
  }).then((response) => {
    console.log(response);
  });
});