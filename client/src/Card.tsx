/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardBody from './CardBody';
import CardButtons from './CardButtons';
import mockResponse from './mock.js';
import { Loader } from '@googlemaps/js-api-loader';

function Card() {
  useEffect(() => {
    const fetchData = async () => {
      // const loader = new Loader({
      //   apiKey: 'APIKEY',
      //   version: 'weekly',
      //   libraries: ['places']
      // });

      // loader.importLibrary('places').then(async ({ Place }) => {
      //   const { LatLng } = await loader.importLibrary('core');

      //   // Restrict within the map viewport.
      //   const center = new LatLng(45.523949, -122.989738);
      //   const request = {
      //     // required parameters
      //     fields: [
      //       'displayName',
      //       'formattedAddress',
      //       'photos',
      //       'nationalPhoneNumber'
      //     ],
      //     locationRestriction: {
      //       center: center,
      //       radius: 500
      //     },
      //     // optional parameters
      //     includedPrimaryTypes: ['restaurant'],
      //     maxResultCount: 2,
      //     language: 'en-US',
      //     region: 'us'
      //   };

      //   const { places } = await Place.searchNearby(request);

      //   console.log(places); //eslint-disable-line
      // });
    };

    fetchData();
  }, []);

  const [restaurants, setRestaurants] = useState(mockResponse);
  const [activeRestaurant, setActiveRestaurant] = useState(
    restaurants[0]
  );
  console.log(activeRestaurant); //eslint-disable-line

  return (
    <div className='bg-light-100 max-w-full w-96 mx-auto mt-14 rounded-md border-2 border-accent py-5 px-4 f'>
      <h2 className='text-5xl text-accent uppercase text-center font-bold font-display'>
        {activeRestaurant?.displayName?.text || 'No Restaurants Found'}
      </h2>

      <CardBody activeRestaurant={activeRestaurant} />

      <footer>
        <CardButtons />
      </footer>
    </div>
  );
}

export default Card;
