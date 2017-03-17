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
        _userId: "someuserobject1d",
        food_title: "Nasi Bebek Sambel Ijo",
        food_pic : "nasibebek.jpg",
        food_price: "35000",
        food_qty  : 3,
        food_tags :"pedas enak gurih",
        food_desc : "deskripsi tentang sebuah makanan",
        _requestId : "somerequestid",
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
