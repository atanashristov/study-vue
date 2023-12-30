---
description: Swagger - GET command example
image: /images/logos/swagger-logo.png
head:
  meta:
    - name: 'keywords'
      content: 'Swagger'
publishedAt: 2018-09-22T00:00:00-06:00
---
# Swagger - GET command example

![Swagger - GET command example](/images/logos/swagger-logo.png)

In this post I put together an example of defining a GET API command in _Swagger_. I cover defining URL and path of the API, list of parameters (path, query and header parameters) for the GET API command and the response body of the command.

To exercise the code I was using the [Online Swagger Editor](https://editor.swagger.io/){:target="_blank"}. The editor also can be downloaded from [swagger.io web site](https://swagger.io/tools/swagger-editor/){:target="_blank"}. It is a node project and can be run locally:

```bash
git clone https://github.com/swagger-api/swagger-editor.git
cd swagger-editor/
npm install
npm start
```

<hr/>

Table of content:

<!-- vscode-markdown-toc -->
- [Swagger - GET command example](#swagger---get-command-example)
  - [Specification file](#specification-file)
  - [Path and request definition](#path-and-request-definition)
  - [Links](#links)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

<hr/>

[Swagger](https://swagger.io/){:target="_blank"} is a framework and set of tools that use the [OpenAPI Specification (OAS)](https://www.openapis.org/){:target="_blank"} for describing, producing, consuming, and visualizing REST-ful web services.

Swagger uses _YAML_ as language to define the API contracts. Some basic YAML syntax I covered in a previous [blog post](./yaml-basic-syntax/).

In this example the GET API command is a part of a _Product Catalog API_ with the following top-level information:

```txt
    Product Catalog service.
    Company: ProductCatalog.com
    API base URL:
        https://api.ProductCatalog.com/v1
```

We have a _"GET products" API command_. Upon success we receive tax rate information, and a list of products with their id, title and pricing information.

```bash
curl -X GET "https://api.ProductCatalog.com/v1/products/123?userId=456" -H "accept: application/json" -H "api-sessionid: ABCDEF"

{
  "taxRate": 0.10,
  "products": [
    {
      "productId": 123,
      "productTitle": "Basic membership",
      "isoCurrencyCode": "USD",
      "productPrice": {
        "salesPrice": 1.00,
        "taxAmount": 0.10,
        "totalCost": 1.10
      }
    }
  ]
}
```

## Specification file

We start with definition of the Product Catalog API in a file like this:

```yaml
swagger: '2.0' # Every Open API file needs this

info:
  version: "0.0.1"
  title: Product Catalog service
  description: |
    The Product Catalog service provides products information, and allows purchasing of products.
host: api.ProductCatalog.com
basePath: /v1
tags:
  - name: products
    description: Lists of products, information about single product, etc.
  - name: purchase
    description: Purchasing products
schemes:
  - https

```

I added two _tags_ to group service commands - "products" and "purchase". I am adding the "GET products" API command to the "products" tag.

The online Swagger editor is composed of left side panel, where we enter the YAML code and right side panel, where we get error messages, hints and preview of the API. It also provides a simple generator of mock data inside the right side panel. In this case we have still work to do, as we do not have any paths defined:

![Editor error](../blog-post-assets/images/swagger/editor_error-1.png)

## Path and request definition

Next I define the request for getting the list of all the products from the catalog. The request has:

- URL endpoint
- HTTP Method
- Path parameters
- Query parameters
- Custom header parameters

In the URL I have both _path parameter_ as well as _query parameter_:

```http
GET https://api.ProductCatalog.com/v1/products/{ratecardId}?userId={userId}
```

And here is the definition of the _path and method_:

```yaml
# Endpoints
paths:
  /products/{ratecardId}:
    get:
      tags:
        - products
      summary: |
        Get list of all products by ratecard ID.
      produces:
        - application/json
      parameters:
        # Sent as path parameter
        - name: ratecardId
          description: Ratecard ID
          in: path
          required: true
          type: integer

        # Sent as query parameter
        - name: userId
          description: User ID
          in: query
          required: true
          type: integer

        # Sent as header parameter
        - name: api-sessionid
          description: Session ID
          in: header
          required: false
          type: string
```

The response has to be defined using **OAS schema**. The OAS schema object is based off the [JSON Schema Specification](http://json-schema.org/). With the OAS schema we define:

- Key and value pairs
- Type of the values

To simplify the structure of the YAML file, we are using a **`$ref` reference**. The `$ref` reference is a key which value points to a structure defined somewhere else in the YAML file.

Let's say for example we have this `$ref` reference:

```yaml
schema:
  $ref: '#/definitions/GetProductsResponse'
```

Then later in the file under `definitions:` we have this definition:

```yaml{2}
definitions:
  GetProductsResponse:
    properties:
      ...
```

And here finally are the definitions for http response code 200 and 400:

```yaml{6,43}
      # Response fields
      responses:
        '200':
          description: successful operation
          schema:
              $ref: '#/definitions/GetProductsResponse'
        '400':
          description: Invalid ratecardId or invalid userId

definitions:
    ProductPrice:
      description: Pricing information
      type: object
      properties:
        salesPrice:
          description: Sales price prior tax application
          type: number
          format: double
        taxAmount:
          description: Tax amount
          type: number
          format: double
        totalCost:
          description: Total cost after tax applied
          type: number
          format: double

    Product:
      type: object
      properties:
        productId:
          description: Product ID
          type: integer
        productTitle:
          description: Product title
          type: string
        isoCurrencyCode:
          description: Three letter ISO currency code
          type: string
        productPrice:
          $ref: '#/definitions/ProductPrice'

    GetProductsResponse:
      type: object
      properties:
        taxRate:
          description: Tax rate
          type: number
          format: double
          minimum: 0.0000
        products:
          type: array
          items:
            $ref: '#/definitions/Product'
```

## Links

[Download the code](/attachments/swagger/get-products-example.yaml){:target="_blank"}

[Swagger](https://swagger.io/){:target="_blank"}

[Online Swagger Editor](https://editor.swagger.io/){:target="_blank"}

[Downloadable Swagger Editor](https://swagger.io/tools/swagger-editor/){:target="_blank"}

[OpenAPI Specification (OAS)](https://www.openapis.org/){:target="_blank"}

[YAML](http://yaml.org/){:target="_blank"}

[YAML basic syntax](./yaml-basic-syntax/){:target="_blank"}
