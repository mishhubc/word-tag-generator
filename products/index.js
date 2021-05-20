const init = () => {
  const product1Category = document.querySelector(".product1-category");
  const product2Category = document.querySelector(".product2-category");
  const product3Category = document.querySelector(".product3-category");
  const product4Category = document.querySelector(".product4-category");
  const product5Category = document.querySelector(".product5-category");
  const product6Category = document.querySelector(".product6-category");

  const product1 = document.querySelector("#product1");
  const product2 = document.querySelector("#product2");
  const product3 = document.querySelector("#product3");
  const product4 = document.querySelector("#product4");
  const product5 = document.querySelector("#product5");
  const product6 = document.querySelector("#product6");

  const handleProduct = (product, a, b, c, d, e) => {
    product.classList.remove("hide");
    a.classList.add("hide");
    b.classList.add("hide");
    c.classList.add("hide");
    d.classList.add("hide");
    e.classList.add("hide");
  };

  //the function render an div with links on the image and classes
  //the function render just two products when you add and extra product
  //you need to append as child and do not forgot to add the extra links
  //for the third or forth products in the rows on the subcategory of the products or even down sub-sub categories
  // at the moment it renders only the content in polish language
  //if you need to render the other language of the conent you need to add extra logic
  const renderSubcategory = function (
    classProduct,
    firstTitle,
    firstSubtitle,
    secondTitle,
    secondSubtitle,
    firstlink = "#",
    secondlink = "#"
  ) {
    return `<div class="product-category-item ${classProduct}">
						<br>
						<br>
						<div>
							<a href="${firstlink}">
								<div class="product-category-item__common  ${classProduct}__first"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>  ${firstTitle}  </h4>
							<h4> ${firstSubtitle}</h4>
						</div>
					</div>
					<div class="product-category-item">
						<br>
						<br>
						<div>
							<a href="${secondlink}">
								<div class="product-category-item__common  ${classProduct}__second"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>${secondTitle} </h4>
							<h4>${secondSubtitle}</h4>
						</div>
					</div>

`;
  };

  const renderProductItems = (productCategory, productToRender) => {
    productCategory.innerHTML = productToRender;
  };

  // SZNURY

  product1.addEventListener("click", (e) => {
    e.preventDefault();

    handleProduct(
      product1Category,
      product2Category,
      product3Category,
      product4Category,
      product5Category,
      product6Category
    );

    //ading classes for every item to listen to change state

    product1Category.innerHTML = `

            <div class="product-category-item sznuryS">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__first-productS product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Sznury </h4>
							<h4> szydełkowe S</h4>
						</div>
					</div>

					<div class="product-category-item sznuryZ">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__second-productS product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Sznury zaplatane Z</h4>
							<h4>zaplatane Z</h4>
						</div>
					</div>

					<div class="product-category-item">
						<div>
							<a href="#">
								<div class="product-category-item__third-productS product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Sznury skręcane</h4>
						</div>
					</div>

					<div class="product-category-item">
						<div>
							<a href="#">
								<div class="product-category-item__forth-productS product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Sznury oplatane</h4>
						</div>
					</div>`;

    //S

    const sznuryS = document.querySelector(".sznuryS");
    const sznuryZ = document.querySelector(".sznuryZ");

    const P1 = renderSubcategory(
      "sznuryS",
      "Sznur",
      "szydełkowy S1",
      "Sznur",
      "szydełkowy S2"
    );

    const P2 = renderSubcategory(
      "sznuryZ",
      "Sznury zaplatane",
      "koszulki",
      "Sznury zaplatane  ",
      "koszuli zbrojone"
    );

    sznuryS.addEventListener("click", () => {
      product1Category.innerHTML = P1;
    });
    sznuryZ.addEventListener("click", () => {
      product1Category.innerHTML = P2;
    });
  });

  //Profile

  product2.addEventListener("click", (e) => {
    e.preventDefault();
    handleProduct(
      product2Category,
      product1Category,
      product3Category,
      product4Category,
      product5Category,
      product6Category
    );
    const Profile = `
  			<div class="product-category-item PZ">
						<br><br>
						<div>
							<br />
							<br>
							<a href="#">
								<div class="product-category-item__first-productP product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>
								Profile zaplatane
							</h4>
							<h4>

								z uchwytem
							</h4>
							<h4>

								bocznym
							</h4>
						</div>
					</div>

					<div class="product-category-item PP" >
						<br><br>
						<div>
							<a href="#">
								<div class="product-category-item__second-productP product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Profile </h4>
							<h4> przeszywane S</h4>
							<!-- <h4>Profile przeszywane S</h4> -->
						</div>
					</div>

					<div class="product-category-item PO">
						<div>
							<a href="#">
								<div class="product-category-item__third-productP product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Profile owalne S</h4>
						</div>
					</div>
					
					<div class="product-category-item PZZ">
						<div>
							<a href="#">
								<div class="product-category-item__forth-productP product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Profile zaplatane Z</h4>
						</div>
					</div>`;
    product2Category.innerHTML = Profile;

    const PP = document.querySelector(".PP");
    const PO = document.querySelector(".PO");
    const PZZ = document.querySelector(".PZZ");

    const PPContent = renderSubcategory(
      "PPrz",
      "Profile przeszywane",
      "pojedynczo S1",
      "Profile przeszywane",
      " podwójnie S2"
    );

    const handlePP = () => {
      renderProductItems(product2Category, PPContent);
    };

    PP.addEventListener("click", handlePP);
  });

  //Tasmy

  product3.addEventListener("click", (e) => {
    e.preventDefault();
    handleProduct(
      product3Category,
      product1Category,
      product4Category,
      product2Category,
      product5Category,
      product6Category
    );

    product3Category.innerHTML = `
  					<div class="product-category-item TS">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__first-productT product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Taśmy dziane</h4>
							<h4>szydełkowe S</h4>
						</div>
					</div>

					<div class="product-category-item TK">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__second-productT product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Taśmy tkane</h4>
							<h4>z krosna K</h4>
						</div>
					</div>

					<div class="product-category-item TZ">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__third-productT product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Taśmy zaplatane</h4>
							<h4>na plecionkarkach Z</h4>
						</div>
					</div>
  
  `;
    const TaS = document.querySelector(".TS");
    const TaK = document.querySelector(".TK");

    const P1 = renderSubcategory(
      "TasmyS",
      "Taśmy ",
      "szydełkowe Sf",
      "Taśmy",
      "szydełkowe Sr"
    );
    const P2 = renderSubcategory(
      "TasmyTK",
      "Taśmy ",
      "tkane jednowątkowe",
      "Taśmy",
      "tkane dwuwątkowe"
    );

    //need to ad the link for the third product
    const childOFTS = `<div class="product-category-item">
						<br>
						<br>
						<div>
							<a href="#">
								<div class="product-category-item__common  TasmyS__third"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Taśmy s </h4>
							<h4>zydełkowe S1</h4>
						</div>`;
    const firstP1Together = P1 + childOFTS;

    TaS.addEventListener("click", () => {
      product3Category.innerHTML = firstP1Together;
    });
    TaK.addEventListener("click", () => {
      product3Category.innerHTML = P2;

      const TasmyTK__first = document.querySelector(".TasmyTK__first");

      //Sub-sub category for the first sub category__"tkane jednowątkowe"

      const P1_subSub = renderSubcategory(
        "TasmyJedno",
        "Taśma",
        "szklana jednowątkowa",
        "Taśma",
        "bazaltowa jednowątkowa",
        "https://www.google.com/",
        "https://www.instagram.com/"
      );

      TasmyTK__first.addEventListener("click", () => {
        product3Category.innerHTML = P1_subSub;
      });
    });
  });

  // SZCZELIWA
  product4.addEventListener("click", (e) => {
    e.preventDefault();
    handleProduct(
      product4Category,
      product3Category,
      product2Category,
      product1Category,
      product5Category,
      product6Category
    );
  });

  // Zestawy
  product5.addEventListener("click", (e) => {
    e.preventDefault();
    handleProduct(
      product5Category,
      product3Category,
      product2Category,
      product1Category,
      product6Category,
      product4Category
    );

    const zestawy = `
  					<div class="product-category-item ZStandard">
						<div>
							<a href="#">
								<div class="product-category-item__first-productZ product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Zestawy naprawcze</h4>
							<h4>Standard</h4>
						</div>
					</div>

					<div class="product-category-item ZPremium">
						<div>
							<a href="#">
								<div class="product-category-item__second-productZ product-category-item__common"></div>
							</a>
						</div>
						<div class="product-category__description">
							<h4>Zestawy naprawcze</h4>
							<h4>Premium</h4>
						</div>
					</div>`;
    product5Category.innerHTML = zestawy;
    const ZStandard = document.querySelector(".ZStandard");
    const ZPremium = document.querySelector(".ZPremium");

    const P1 = renderSubcategory(
      "standard",
      "Zestawy naprawcze",
      "sznury szklane",
      "Zestawy naprawcze",
      "taśmy szklane"
    );
    const P2 = renderSubcategory(
      "premium",
      "Zestawy naprawcze",
      "sznury bazaltowe",
      "Zestawy naprawcze",
      "taśmy bazaltowe"
    );
    const handleZStandard = () => {
      renderProductItems(product5Category, P1);
    };
    const handleZPremium = () => {
      renderProductItems(product5Category, P2);
    };

    ZStandard.addEventListener("click", handleZStandard);
    ZPremium.addEventListener("click", handleZPremium);
  });

  //kleje
  product6.addEventListener("click", (e) => {
    e.preventDefault();
    handleProduct(
      product6Category,
      product3Category,
      product2Category,
      product1Category,
      product5Category,
      product4Category
    );
  });
};

init();
