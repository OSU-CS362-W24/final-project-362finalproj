describe('Correctly generates line chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Line" }).click()
    cy.url().should('eq', 'http://localhost:8080/line.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

  })
})

describe('Correctly generates scatter plot chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Scatter" }).click()
    cy.url().should('eq', 'http://localhost:8080/scatter.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

  })
})

describe('Correctly generates bar chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Bar" }).click()
    cy.url().should('eq', 'http://localhost:8080/bar.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

  })
})

describe('Correctly transfers information between pages', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Line" }).click()
    cy.url().should('eq', 'http://localhost:8080/line.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("link", { name: "Scatter" }).click()
    cy.url().should('eq', 'http://localhost:8080/scatter.html')

    cy.findByRole("textbox", { name: /Chart title/i }).should("have.value", "Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).should("have.value", "Cats")
    cy.findByRole("textbox", { name: /Y label/i }).should("have.value", "Dogs")

    cy.get(':nth-child(4) > .x-value-input').should("have.value", "1")
    cy.get(':nth-child(5) > .y-value-input').should("have.value", "3")

    cy.get(':nth-child(6) > .x-value-input').should("have.value", "2")
    cy.get(':nth-child(7) > .y-value-input').should("have.value", "7")

    cy.get(':nth-child(8) > .x-value-input').should("have.value", "3")
    cy.get(':nth-child(9) > .y-value-input').should("have.value", "15")

    cy.get(':nth-child(10) > .x-value-input').should("have.value", "4")
    cy.get(':nth-child(11) > .y-value-input').should("have.value", "25")

    cy.get(':nth-child(12) > .x-value-input').should("have.value", "5")
    cy.get(':nth-child(13) > .y-value-input').should("have.value", "40")

    cy.findByRole("link", { name: "Bar" }).click()
    cy.url().should('eq', 'http://localhost:8080/bar.html')

    cy.findByRole("textbox", { name: /Chart title/i }).should("have.value", "Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).should("have.value", "Cats")
    cy.findByRole("textbox", { name: /Y label/i }).should("have.value", "Dogs")

    cy.get(':nth-child(4) > .x-value-input').should("have.value", "1")
    cy.get(':nth-child(5) > .y-value-input').should("have.value", "3")

    cy.get(':nth-child(6) > .x-value-input').should("have.value", "2")
    cy.get(':nth-child(7) > .y-value-input').should("have.value", "7")

    cy.get(':nth-child(8) > .x-value-input').should("have.value", "3")
    cy.get(':nth-child(9) > .y-value-input').should("have.value", "15")

    cy.get(':nth-child(10) > .x-value-input').should("have.value", "4")
    cy.get(':nth-child(11) > .y-value-input').should("have.value", "25")

    cy.get(':nth-child(12) > .x-value-input').should("have.value", "5")
    cy.get(':nth-child(13) > .y-value-input').should("have.value", "40")
  })
})

describe('Correctly saves a line chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Line" }).click()
    cy.url().should('eq', 'http://localhost:8080/line.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

    cy.findByRole("button", { name: "Save chart"}).click()
    cy.findByRole("link", { name: "Gallery"}).click()

    cy.url().should('eq', 'http://localhost:8080/')
    cy.findByRole("img", { name: "Cats vs Dogs"}).should("exist")

  })
})

describe('Correctly saves a bar chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Bar" }).click()
    cy.url().should('eq', 'http://localhost:8080/bar.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

    cy.findByRole("button", { name: "Save chart"}).click()
    cy.findByRole("link", { name: "Gallery"}).click()

    cy.url().should('eq', 'http://localhost:8080/')
    cy.findByRole("img", { name: "Cats vs Dogs"}).should("exist")

  })
})

describe('Correctly saves a scatter plot chart', () => {
  it('passes', () => {
    cy.visit('/')

    cy.findByRole("link", { name: "Scatter" }).click()
    cy.url().should('eq', 'http://localhost:8080/scatter.html')

    cy.findByRole("textbox", { name: /Chart title/i }).type("Cats vs Dogs")

    cy.findByRole("textbox", { name: /X label/i }).type("Cats")
    cy.findByRole("textbox", { name: /Y label/i }).type("Dogs")

    cy.get(':nth-child(4) > .x-value-input').type("1")
    cy.get(':nth-child(5) > .y-value-input').type("3")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(6) > .x-value-input').type("2")
    cy.get(':nth-child(7) > .y-value-input').type("7")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(8) > .x-value-input').type("3")
    cy.get(':nth-child(9) > .y-value-input').type("15")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(10) > .x-value-input').type("4")
    cy.get(':nth-child(11) > .y-value-input').type("25")
    cy.findByRole("button", { name: "+"}).click()

    cy.get(':nth-child(12) > .x-value-input').type("5")
    cy.get(':nth-child(13) > .y-value-input').type("40")

    cy.findByRole("button", { name: "Generate chart"}).click()

    cy.findByRole("img").should("exist")

    cy.findByRole("button", { name: "Save chart"}).click()
    cy.findByRole("link", { name: "Gallery"}).click()

    cy.url().should('eq', 'http://localhost:8080/')
    cy.findByRole("img", { name: "Cats vs Dogs"}).should("exist")

  })
})