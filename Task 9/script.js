const productsContainer = document.querySelector(".products");
const stats = document.querySelector(".stats");
const errorDiv = document.querySelector(".error");
const finalDiv = document.querySelector(".final");

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {

        stats.textContent = `Total Products: ${products.length}`;

        products.forEach((product) => {

            const card = document.createElement("div");
            card.setAttribute("class", "card");

            // Product Image
            const image = document.createElement("img");
            image.setAttribute("src", product.image);
            image.setAttribute("alt", product.title);

            // Product Title
            const title = document.createElement("h3");

            let formattedTitle =
                product.title.length > 30
                    ? product.title.slice(0, 30) + "..."
                    : product.title;

            title.textContent = formattedTitle;

            // Product Price
            const price = document.createElement("p");
            price.textContent = `Price: $${product.price}`;

            // Product Category
            const category = document.createElement("p");
            category.textContent = `Category: ${product.category}`;

            // Product Description
            const description = document.createElement("p");

            let formattedDescription =
                product.description.length > 50
                    ? product.description.slice(0, 50) + "..."
                    : product.description;

            description.textContent = formattedDescription;

            // Product Tag
            const tag = document.createElement("span");
            tag.setAttribute("class", "tag");

            if (product.price > 100) {
                tag.textContent = "Expensive Product";
                tag.classList.add("expensive");
            } else {
                tag.textContent = "Budget Product";
                tag.classList.add("budget");
            }

            // Buttons Container
            const buttonsDiv = document.createElement("div");
            buttonsDiv.setAttribute("class", "buttons");

            // Show Price Button
            const showPriceBtn = document.createElement("button");
            showPriceBtn.textContent = "Show Price";

            showPriceBtn.addEventListener("click", () => {
                alert(product.price);
            });

            // Show Category Button
            const showCategoryBtn = document.createElement("button");
            showCategoryBtn.textContent = "Show Category";

            showCategoryBtn.addEventListener("click", () => {
                alert(product.category);
            });

            // View Details Button
            const detailsBtn = document.createElement("button");
            detailsBtn.textContent = "View Details";

            detailsBtn.addEventListener("click", () => {
                alert(
                    `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}`
                );
            });

            buttonsDiv.append(
                showPriceBtn,
                showCategoryBtn,
                detailsBtn
            );

            card.append(
                image,
                title,
                tag,
                price,
                category,
                description,
                buttonsDiv
            );

            productsContainer.append(card);
        });
    })
    .catch(() => {
        errorDiv.textContent = "Something Went Wrong";
        errorDiv.style.backgroundColor = "red";
        errorDiv.style.color = "white";
        errorDiv.style.textAlign = "center";
        errorDiv.style.padding = "10px";
    })
    .finally(() => {
        finalDiv.textContent =
            "API Request Completed Successfully";
    });