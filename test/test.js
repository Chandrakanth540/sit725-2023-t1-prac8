// Use dynamic import for ES modules
import { expect } from 'chai';
import request from 'request';

describe('User Unit Test', function () {
  const url = 'http://localhost:3000/api/submit';

  // POST User
  describe('POST User', () => {
    it('should create a new user', (done) => {
      const postData = {
        title: 'pathfinder',
        desc: `Great Look`,
        image: `https://www.nissan.com.au/content/dam/Nissan/AU/Images/vehicles/Pathfinder/side-profiles/Pathfinder_22_Ti_Profile_L_GlacierWhite_RGB.png.ximg.c1m.conf.png`,
      };

      request.post(
        {
          url: url,
          json: postData,
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }

          const responseData = body;
          expect(response.statusCode).to.equal(200);
          expect(responseData.message).to.equal('car post successful');

          done();
        },
      );
    });
  });

  // GET User
  describe('GET User', () => {
    it('should return users', (done) => {
      request.get('http://localhost:3000/api/cars', (error, response, body) => {
        if (error) {
          done(error);
          return;
        }

        expect(response.statusCode).to.equal(200);
        const responseData = JSON.parse(body);
        expect(responseData.message).to.equal('retrieved');

        done();
      });
    });
  });

  // DELETE User
  describe('DELETE User', () => {
    it('should delete a user', (done) => {
      const deleteData = {
        title: 'pathfinder',
        desc: `Great Look`,
        image: `https://www.nissan.com.au/content/dam/Nissan/AU/Images/vehicles/Pathfinder/side-profiles/Pathfinder_22_Ti_Profile_L_GlacierWhite_RGB.png.ximg.c1m.conf.png`,
      };

      request.delete(
        {
          url: 'http://localhost:3000/api/deletecar',
          json: deleteData,
        },
        (error, response, body) => {
          if (error) {
            done(error);
            return;
          }

          const responseData = body;
          expect(response.statusCode).to.equal(200);
          expect(responseData.message).to.equal('delete successful');

          done();
        },
      );
    });
  });
});
