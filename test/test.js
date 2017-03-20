const chai = require('chai')
const expect = require('chai').expect

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = 'http://localhost:3000'

describe('Testing CRUD - food', function () {

  it('result - Post a food', function (done) {
    chai.request(app)
      .post('/users/food')
      .send({
        food_title: "Taichan gulai sapi ",
        food_pic : "taichan.jpg",
        food_price: "75000",
        food_qty  : 7,
        food_tags :"sate taichan sapi",
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


})
