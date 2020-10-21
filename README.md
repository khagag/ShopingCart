# ShopingCart

![Image of Yaktocat](/public/shot.png)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

ShopingCart is a client-server app that provides a basic shopping cart functionality through rich Matrial-ui interface and core php server side handler.

  - list of items/goods
  - items cart
  - server-side checkout for securing your payments

### Installation

First clone the project from github public repo [GitHub](https://github.com/khagag/ShopingCart.git).
Then move it to the production directory.
Then build the UI using the next set of commands.

```sh
$ clone https://github.com/khagag/ShopingCart.git
$ cd ShopingCart
$ yarn install
$ yarn build
```
Finally run your server and you are ready to go.

### How to use
- Add items to your Cart
- Click on the cart icon to go checkingout

### Todos

 - Add ORM to fit the model part
 - Add Night Mode

### Testing
To test the end points just type the next commands.
```sh
$ composer install
$ ./vendor/bin/phpunit ./endpointstests.php
```

### API end points
##### /api/goods [GET]
This checks retrieves every good in the list as json object.with the following parameters.
- success : True    #it's a boolean indecator to check if the request was successful.
- goods : []        #it's the list of goods.

##### /api/checkout [POST]
This end point recives a list of goods IDs and calculate the total amount then sends back the a list of the goods after checking for the prices & the total price after the discount if exists.

- success : True    #it's a boolean indecator to check if the request was successful.
- goods : []          #it's the list of the requested goods.
- total_price : 1     # numeric value


License
----

MIT
