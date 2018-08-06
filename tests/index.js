import tape from 'tape';
import Blocked from '../src/index';


tape('Instantiate new Blocked', (t) => {
  const duration_check = 10; // test for blockage in ms

  t.comment('Instantiation');
  const blocked = new Blocked( (duration) => {
    t.pass(`Report blockage of ${duration} ms`);
  }, duration_check);

  t.pass('Instantiated');


  for(let i = 0; i < 1000; i++) {
    const f = new Float32Array(100000);
    f.fill(123);
  }

  setTimeout( () => {
    blocked.stop();
    t.pass('Stopped');
    t.end();
  }, duration_check * 2);
});


