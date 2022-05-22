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

const Home: NextPage = () => {
  const getSvg = (svg: string) => {
    console.log('svg', svg)
  }

  const [json, set_json] = React.useState(JSONDATA);
  const [raw_json, set_raw_json] = React.useState<string>(JSON.stringify(JSONDATA, null, 2));
  const [json_error, set_json_error] = React.useState<string>('');

  return (
    <div className={styles.container}>
      <Head>
        <title>JSON View</title>
        <meta name="description" content="JSON View" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>JSON to Visual Tree</h1>
      <h2>Convert your json to visual tree, JASSI: https://github.com/fearless23</h2>
      <div style={{ marginTop: '1em' }}>
        <label htmlFor={"from-text"}>Input your JSON here...</label>
        <br></br>
        <textarea id="from-text" rows={6}
          value={raw_json}
          onChange={e => {
            set_raw_json(e.target.value)
            try {
              set_json_error('');
              const _json = JSON.parse(e.target.value);
              set_json(_json);
            } catch (error) {
              set_json_error((error as Error).message as string)
            }
          }}
          cols={80}></textarea>
      </div>
      {json_error && (
        <div style={{ marginTop: '1em', color: 'red' }}>
          {json_error}
        </div>
      )}
      <JsonView json={json} getSvg={getSvg} autoRender />
    </div>
  )
}

export default Home
