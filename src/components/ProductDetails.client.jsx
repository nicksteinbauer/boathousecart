// @ts-check
import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  ProductPrice,
  AddToCartButton,
  Link
} from "@shopify/hydrogen";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import Modal from 'react-bootstrap/Modal';

//import { Button } from "react-bootstrap";

export default function ProductDetails({ product }) {
  const [selectedProductVariant, setSelectedProductVariant] = useState("");


  return (
    <ProductOptionsProvider data={product}>
      <section
        className={`flex-md inside-lg ${selectedProductVariant
          .replace(/\s/g, "")
          .toLowerCase()}`}
      >
        <div className="forty galleryContainer">
          <ProductGallery media={product.media.nodes} />
        </div>
        <div className="buybox sixty flex-vertical padding-20">
          <div>
            <h1 className="">{product.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml,
              }}
            ></div>

            <ProductForm
              setSelectedProductVariant={(data) =>
                setSelectedProductVariant(data)
              }
              product={product}
            />
          </div>
        </div>
      </section>
     
    </ProductOptionsProvider>
  );
}

function ProductForm({ product, setSelectedProductVariant }) {

 

  const { options, selectedVariant, variants, setSelectedOption } =
    useProductOptions();

  const [startDate, setStartDate] = useState(new Date(options[0].values[0]));

  const allowedDates = variants.filter(
    ({ availableForSale }) => availableForSale
  );

  const formattedDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
      .format(date)
      .replace(",", "");

   // Start of nick test

  
  
  const {
    relatedtitle1,
    relatedlink1,
    // added expiration date to every product, you can use this data to set product out of stock
    expiration
  } = product;

  const rtitle1 = relatedtitle1?.value ? relatedtitle1?.value : null;
  const rlink1 = relatedlink1?.value ? relatedlink1?.value : null;
  // added expiration date to every product, you can use this data to set product out of stock
  const expirationDate = expiration?.value ? expiration?.value : null;

  //const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const todaysDate = new Date();

  const now = new Intl.DateTimeFormat('en-CA', {
    month: '2-digit',
    day: 'numeric',
    year: 'numeric'
  }).format(todaysDate).replace(",", "");
  
  const expired = now >= expirationDate;

  // if (now < expirationDate) {
  //   console.log("Available");
  // } else {
  //   console.log("Past");
  // }




  // end of nick test

  
  return (
    <form>
      {
        <div>
          {options.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }

            if (name === "Date") {
              return (
                <div key={name} className="productForm">
                  <legend>{name}</legend>
                  <div className="always-flex flex-gap-6">
                    <DatePicker
                      includeDates={allowedDates.map(
                        ({ title }) =>
                          new Date(title.split(" ").slice(0, 3).join(" "))
                      )}
                      selected={startDate}
                      dateFormat="MMMM d yyyy"
                      onChange={(date) => {
                        const dateFormat = formattedDate(date);
                        setStartDate(date);
                        setSelectedOption(name, dateFormat);
                      }}
                    />
                    
                  </div>
                </div>
              );
            } else {
              return (
                <div key={name} className="productForm">
                  <legend>{name}</legend>
                  <div className="always-flex flex-gap-6">
                    <OptionRadio
                      setSelectedProductVariant={(data) =>
                        setSelectedProductVariant(data)
                      }
                      name={name}
                      values={values}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      }

      <div className="productPrice">
        <ProductPrice
          className=""
          priceType="compareAt"
          variantId={selectedVariant.id}
          data={product}
        />
        <ProductPrice
          className=""
          variantId={selectedVariant.id}
          data={product}
        />
        
      </div>
      <div className="buyNow flex-xs justify">


      
      <AddToCartButton
        type="button"
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock || expired}
        className="addButton"
        onClick={handleShow}
      >
        <span className="l">{isOutOfStock || expired ? "Sold out" : "Add to cart"}</span>
      </AddToCartButton>
      
      <Modal show={show} onHide={handleClose} className="recommendModal">
          <Modal.Header closeButton>
          <Modal.Title>Product added to Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {rlink1 !== null && (
              <>
              <p>Would you like to rent an additional day? Click on the product below.</p>
              <Link to={`/products/${rlink1}`} onClick={handleClose} className="always-flex">
                <img id="gid://shopify/ImageSource/33484292096311" alt="Boathouse Cart Rental 2 Person Cart" loading="lazy" className="media miniImage" src="https://cdn.shopify.com/s/files/1/0717/0375/7111/files/BoathouseCartRental2Person.jpg?v=1683905041" decoding="async"></img>
                <h3 className="flex-vertical"><span>{rtitle1}</span></h3>
              </Link>
              </>
            )}
            
            <Link className="button" to="/cart">View Cart</Link>
            
          </Modal.Body>
      </Modal>
      
      </div>
    </form>
  );
}



function OptionRadio({ values, name, setSelectedProductVariant }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  useEffect(() => {
    values &&
      values.find((item) => {
        if (selectedOptions[name] === item) {
          const id = `option-${name}-${item}`;
          id.includes("option-Cart ") && setSelectedProductVariant(item);
        }
      });
  }, [values]);

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;
      
        return (
          <label key={id} htmlFor={id}>
            <input
              className=""
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => {
                console.log({ name, value });
                setSelectedOption(name, value);
              }}
            />
            <div
              onClick={() =>
                name === "Cart Size" && setSelectedProductVariant(value)
              }
              className={`${checked ? "imChecked" : "imNotChecked"}`}
            >
              {value}
            </div>
          </label>
        );
      })}
    </>
  );
}

function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }

  return (
    <>
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === "MODEL_3D") {
          extraProps = {
            interactionPromptThreshold: "0",
            ar: true,
            loading: "eager",
            disableZoom: true,
          };
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image",
          },
        };

        return (
          <div key={data.image.id}>
            <MediaFile
              tabIndex="0"
              className="media"
              data={data}
              // @ts-ignore
              options={{
                crop: "center",
              }}
              {...extraProps}
            />
          </div>
        );
      })}
    </>
  );
}
