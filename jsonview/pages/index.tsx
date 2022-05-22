import React from 'react';
import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import JsonView from '../components/jsonview';

const JSONDATA = {
  "employee": {
    "name": "John",
    "age": 30,
    "city": "New York",
    "details": {
      "population": 123456,
      "area": 123,
      "country": "USA",
      "blocks": [
        1, 2, 3, 4
      ]
    }
  },
  "employee2": {
    "name": "Jassi",
    "age": 30,
    "city": "Barnala",
    "details": {
      "population": 123456,
      "area": 123,
      "country": "IN",
      "blocks": [
        1, 2, 3, 4, "ghj"
      ]
    }
  }
}

const JSONDATA2 = {
  "email_in_both_pools": [
    {
      "email": "info@myrealtorerica.com",
      "new_pool_data": {
        "user_id": "02276e33-56a3-44ce-95ce-bfdac6283897",
        "email": "info@myrealtorerica.com",
        "pool_type": "NEW",
        "is_active": 1,
        "created_at": "2021-06-03T19:05:56.494Z",
        "user_status": "CONFIRMED"
      },
      "old_pool_data": {
        "user_id": "02276e33-56a3-44ce-95ce-bfdac6283897",
        "email": "info@myrealtorerica.com",
        "pool_type": "OLD",
        "is_active": 1,
        "created_at": "2021-04-05T11:47:17.027Z",
        "user_status": "CONFIRMED"
      }
    },
    {
      "email": "aj32004@gmail.com",
      "new_pool_data": {
        "user_id": "053807b0-e542-4168-b279-31b768d8aa34",
        "email": "aj32004@gmail.com",
        "pool_type": "NEW",
        "is_active": 1,
        "created_at": "2021-06-03T15:27:12.542Z",
        "user_status": "CONFIRMED"
      },
      "old_pool_data": {
        "user_id": "053807b0-e542-4168-b279-31b768d8aa34",
        "email": "aj32004@gmail.com",
        "pool_type": "OLD",
        "is_active": 1,
        "created_at": "2021-01-21T22:08:52.797Z",
        "user_status": "CONFIRMED"
      }
    },
  ],
}

const Home: NextPage = () => {
  const getSvg = (svg:string) => {
    console.log('svg', svg)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>JSON View</title>
        <meta name="description" content="JSON View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <JsonView json={JSONDATA} getSvg={getSvg} />
    </div>
  )
}

export default Home
