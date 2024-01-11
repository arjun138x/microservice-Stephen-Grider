post service
---------------

comment service
---------------

event-bus service
---------------

query service
---------------
  > instead of getting post from post service and comments from comment service.
    when ever we are creating any post or comments by using event-bus service. 
    we are storing the post and comment data in query service. by using query service
    we can get all post and comment data form query service itself.


moderation service
------------------
  > to filter the comments