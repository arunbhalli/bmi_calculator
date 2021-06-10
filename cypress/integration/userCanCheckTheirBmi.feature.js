describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3000')
		cy.contains('BMI calculator')
	})
})