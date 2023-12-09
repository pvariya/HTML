describe("HTML Tag Content Test", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  const checkTagExistenceAndContent = (tagName) => {
    cy.get(tagName)
      .should("exist")
      .should(($tag) => {
        expect($tag.text().trim()).not.to.be.empty;
      });
  };

  it("should check if <h1> tag contains any data", () => {
    checkTagExistenceAndContent("h1");
  });

  it("should check if <h2> tag contains any data", () => {
    checkTagExistenceAndContent("h2");
  });

  it("should check if <h3> tag contains any data", () => {
    checkTagExistenceAndContent("h3");
  });

  it("should check if <h4> tag contains any data", () => {
    checkTagExistenceAndContent("h4");
  });

  it("should check if <h5> tag contains any data", () => {
    checkTagExistenceAndContent("h5");
  });

  it("should check if <h6> tag contains any data", () => {
    checkTagExistenceAndContent("h6");
  });

  it("should check if <p> tag contains any data", () => {
    checkTagExistenceAndContent("p");
  });

  it("should check if <hr> tag exists", () => {
    cy.get("hr").should("exist");
  });

  it("should check if <br> tag exists", () => {
    cy.get("br").should("exist");
  });

  it("should check if <ul> tag exists", () => {
    cy.get("ul").should("exist");
  });

  it("should check if <ol> tag exists", () => {
    cy.get("ol").should("exist");
  });

  it("should check if <li> tag contains any data", () => {
    checkTagExistenceAndContent("li");
  });

  it("should check if <dl> tag exists", () => {
    cy.get("dl").should("exist");
  });

  it("should check if <dt> tag contains any data", () => {
    checkTagExistenceAndContent("dt");
  });

  it("should check if <dd> tag contains any data", () => {
    checkTagExistenceAndContent("dd");
  });

  const checkInlineElementExistence = (tagName) => {
    cy.get(tagName).should("exist");
  };

  it("should check if inline element <i> exists", () => {
    checkInlineElementExistence("i");
  });

  it("should check if inline element <em> tag exists", () => {
    checkInlineElementExistence("em");
  });

  it("should check if inline element <b> tag exists", () => {
    checkInlineElementExistence("b");
  });

  it("should check if inline element <strong> tag exists", () => {
    checkInlineElementExistence("strong");
  });

  it("should check if inline element <big> tag exists", () => {
    checkInlineElementExistence("big");
  });

  it("should check if inline element <small> tag exists", () => {
    checkInlineElementExistence("small");
  });

  it("should check if inline element <sub> tag exists", () => {
    checkInlineElementExistence("sub");
  });

  it("should check if inline element <sup> tag exists", () => {
    checkInlineElementExistence("sup");
  });

  it("should check if inline element <u> tag exists", () => {
    checkInlineElementExistence("u");
  });

  it("should check if inline element <ins> tag exists", () => {
    checkInlineElementExistence("ins");
  });

  it("should check if inline element <del> tag exists", () => {
    checkInlineElementExistence("del");
  });

  it("should check if inline element <s> tag exists", () => {
    checkInlineElementExistence("s");
  });

  it("should check if inline element <mark> tag exists", () => {
    cy.get("mark").should("exist");
  });
});
