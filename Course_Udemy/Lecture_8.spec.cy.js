it('Example sending the HTTP POST request with expect verification of response', () => {
  const bodyRequest = { title: 'foo', body: 'bar', userId: 1 };

  const headersBody = { 'Content-type': 'application/json; charset=UTF-8' };

  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: bodyRequest,
    headers: headersBody,
  }).then((response) => {
   expect(response).to.have.property("status").to.equal(201);

   expect(response.body).to.have.property('body').to.equal('bar');
   expect(response.body).to.have.property('id').to.equal(101);
   expect(response.body).to.have.property('title').to.equal('foo');
   expect(response.body).to.have.property('userId').to.equal(1);

   expect(response.body.body).to.be.a('string');
   expect(response.body.id).to.be.a('number');
   expect(response.body.title).to.be.a('string');
   expect(response.body.userId).to.be.a('number');

    console.log(response);
  });
});

it('Example sending the HTTP POST request with should verification of response', () => {
  const bodyRequest = { title: 'foo', body: 'bar', userId: 1 };

  const headersBody = { 'Content-type': 'application/json; charset=UTF-8' };

  cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: bodyRequest,
    headers: headersBody,
  }).its('body').should('contain',{
    "title": "foo",
    "body": "bar",
    "userId": 1,
    "id": 101
  })
   });
