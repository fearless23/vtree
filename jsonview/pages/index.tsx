import React from 'react';
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import JsonView from '../components/jsonview/modified';

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

const Home: NextPage = () => {
  const getSvg = (svg: string) => {
    console.log('svg', svg)
  }

  return (
    <div className={styles.container}>
      <JsonView json={JSONDATA} getSvg={getSvg}  />
    </div>
  )
}

export default Home
