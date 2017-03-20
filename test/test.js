const chai = require('chai')
const expect = require('chai').expect

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = 'http://localhost:3000'

describe('Testing CRUD - food', function () {

  it('result - Post a food', function (done) {
    chai.request(app)
      .post('/users/food')
      .attach('food_pic', './test/test_image/botram.png')
      .send({
        food_title: "Nasi Bebek Sambel Ijo",
        food_price: "35000",
        food_qty  : 3,
        food_tags :"pedas enak gurih",
        food_desc : "deskripsi tentang sebuah makanan",
        status : 1
      })
      .end(function (err, res) {

        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done()
      })
  })

  it('result - Get all food', function (done) {
    chai.request(app)

      .get('/users/food')
      .end(function (err, res) {

        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done()
      })
  })

  it('result - Search food with tag "sapi"', function (done) {
    chai.request(app)

      .get('/users/food/sapi')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.an('object');
        done()
      })
  })

})



describe('Testing CRUD - Request', function () {

it('result - Post a request', function (done) {
  chai.request(app)
    .post('/users/request')
    .send({
      _foodId : "58cbb54a7171b1237c5dd81f",
      request_notes :"testing request something",
      request_qty :2,
      status : 0
    })
    .end(function (err, res) {

      expect(res).to.have.status(200);
      expect(res).to.be.an('object');
      done()
    })
})

it('result - Read all request', function (done) {
  chai.request(app)
    .get('/users/request')
    .end(function (err, res) {

      expect(res).to.have.status(200);
      expect(res).to.be.an('object');
      done()
    })
})

})
