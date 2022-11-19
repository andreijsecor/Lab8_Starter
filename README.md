# Lab 8 - Starter
1. I would automatically run unit tests using github actions (or equivalent) whenever code is pushed. This allows the tests to be easily automated and runs them regularly to make the debugging process easier.
2. Generally, end-to-end tests are not a good choice when testing the output of a single function because users will not interact with a product that thoroughly due to the UI limitations.
3. A unit test would generally not be used for this purpose, since it involves at least two separate modules (sending a message + receiving a message on another client).
4. In this case, it appears that the max length feature is part of the message typing feature, which makes these two features part of the same module. As such, a unit test would be appropriate.