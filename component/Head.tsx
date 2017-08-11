import Head from 'next/head';
import * as React from 'react'


export default () =>
<Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>{`
        .LightBox {
          display: none;
        }
        a {
          cursor: pointer;
        }
        .FooterNav.MarginRight {
          'margin-right: 34px;'
        }`}
    </style>
</Head>
