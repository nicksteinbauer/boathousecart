// @ts-check
import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  ProductPrice,
  BuyNowButton,
  AddToCartButton,
} from '@shopify/hydrogen';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <section className='flex-md inside-lg'>
        <div className='forty'>
          <ProductGallery media={product.media.nodes} />
        </div>
        <div className='buybox sixty flex-vertical padding-20'>
          <div>
            <h1 className=''>{product.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml,
              }}
            ></div>

            <ProductForm product={product} />
          </div>
        </div>
      </section>
    </ProductOptionsProvider>
  );
}

function ProductForm({ product }) {
  const { options, selectedVariant, variants, setSelectedOption } =
    useProductOptions();
    
  const [startDate, setStartDate] = useState(
    new Date(options[0].values[0])
  );

  const allowedDates = variants.filter(
    ({ availableForSale }) => availableForSale
  );

  const formattedDate = (date) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
      .format(date)
      .replace(',', '');


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
                <div key={name} className='productForm'>
                  <legend>{name}</legend>
                  <div className='always-flex flex-gap-6'>
                    <DatePicker
                      includeDates={allowedDates.map(
                        ({ title }) => new Date(title)
                      )}
                      selected={startDate}
                      dateFormat='MMMM d yyyy'
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
                <div key={name} className='productForm'>
                  <legend>{name}</legend>
                  <div className='always-flex flex-gap-6'>
                    <OptionRadio name={name} values={values} />
                  </div>
                </div>
              );

            }
            
          })}
        </div>
      }
      
      <div className='productPrice'>
        <ProductPrice
          className=''
          priceType='compareAt'
          variantId={selectedVariant.id}
          data={product}
        />
        <ProductPrice
          className=''
          variantId={selectedVariant.id}
          data={product}
        />
      </div>
      <div className='buyNow flex-xs justify'>
        <PurchaseMarkup />
      </div>
      
    </form>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        type='button'
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel='Adding item to your cart'
        disabled={isOutOfStock}
        className='addButton forty-nine'
      >
        <span className='l'>
          {isOutOfStock ? 'Sold out' : 'Add to cart'}
        </span>
      </AddToCartButton>
      {isOutOfStock ? (
        <span className=''>Available in 2-3 weeks</span>
      ) : (
        <BuyNowButton
          variantId={selectedVariant.id}
          className='nowButton forty-nine'
        >
          <span className=''>Buy it now</span>
        </BuyNowButton>
      )}
    </>
  );
}

function OptionRadio({ values, name }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label key={id} htmlFor={id}>
            <input
              className=''
              type='radio'
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
              className={`${checked ? 'imChecked' : 'imNotChecked'}`}
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
    <div>
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === 'MODEL_3D') {
          extraProps = {
            interactionPromptThreshold: '0',
            ar: true,
            loading: 'eager',
            disableZoom: true,
          };
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        };

        return (
          <div key={data}>
            <MediaFile
              tabIndex='0'
              className='media'
              data={data}
              // @ts-ignore
              options={{
                crop: 'center',
              }}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}
