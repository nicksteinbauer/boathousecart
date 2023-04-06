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
                        ({ title }) => new Date(title.split(" ").slice(0, 3).join(" "))
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
