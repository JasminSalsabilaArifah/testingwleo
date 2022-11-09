describe('webtoon', () => {
  it('register', () => {
    cy.visit('https://www.webtoons.com/member/join?loginType=EMAIL')
    cy.get('#email').type('sabilajasmin3@gmail.com')
    cy.get('#pw').type('qwerty')
    cy.get('#retype_pw').type('qwerty')
    cy.get('#nickname').type('leekwng')
    cy.get('.btn_type9').click()
  })
})