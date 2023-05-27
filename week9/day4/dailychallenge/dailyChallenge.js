//Daily Challenge 1
/*  Imagine you have three friends, and each friend has a gift for you. However, they are all at different distances from your house and will arrive at different times.

To wait for all your friends to arrive and collect all the gifts before opening them, you can use a special tool called "Promise.all."

You give each friend a special device (a promise) that will notify you when they reach your house with their gift. Then you use Promise.all to keep track of all these devices.

Promise.all works like a timer that starts ticking as soon as you give the devices to your friends. It keeps track of all the devices and waits until all your friends arrive with their gifts.

Once all your friends have arrived, Promise.all alerts you by ringing a bell. You can now gather all the gifts and open them together.

In the example given:

promise1 is like your friend who is already at your house with a gift.
promise2 is like another friend who is nearby and will arrive very soon with a gift.
promise3 is like a friend who is far away but will eventually arrive after some time with a gift.
When you use Promise.all with the devices (promises) [promise1, promise2, promise3], it starts the timer and waits for all the devices to ring.

The expected result [3, 42, "foo"] is like opening all the gifts from your friends. Since all the promises will eventually ring (resolve), you will receive an array with the gifts (resolved values) in the same order as the promises were given.

