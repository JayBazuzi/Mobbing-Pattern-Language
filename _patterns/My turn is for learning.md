# Also Known As

# Context

One member of the mob is missing the context (techical, domain, or both) for the
work at hand, and a whiteboarding session as introduction (see [Treasure Map](../patterns/Treasure%20Map.md))
was not enough for them to be confidant in navigating. They can drive without a
problem, but when it's their turn to navigate they have no idea what to do. 

[Navigate the Navigators](../patterns/Navigate%20The%20Navigators.md) is not
enough -- even with tips and pointers from a more experience navigator, this
team member cannot decide what to do next.

[Treasure Map](../patterns/Treasure%20Map.md) is a good start, but there comes a
point where more discussion won't help this team member, they need to see it in
action and take some time for the new concepts to sink in.

This pattern is applicable when there is such a large knowledge gap that the
usual supporting patterns are not enough to give the learning team member
confidence in navigating. 

# Purpose
The stuck team member needs something practical to solidify their learning, and
the rest of the team is ready to get started on the work.

# How To
With rotations of 10m or less, do your regular mobbing.

When it is the learning team member's turn to navigate, they **take the whole
rotation for learning**.

  - back to the whiteboard to answer more questions
  - "I don't understand this code pattern, can you show me an example and explain the concept"?
  - We keep talking about (some domain concept), what does that even mean?
  - When I was driving you had me do X, how does that work?

It's common for a team member with lots to learn to also be new to mobbing, so
they will likely not be proposing this pattern -- another team member will be.
Consider this dialog:

*(After making a treasure map, trying Navigate the navigator, encouraging them to
pause and ask for advice when they are navigating)*

Learner: I'm sorry guys, I can't do this. I'd like to work solo to figure some
stuff out before I try this again.
Team: Ok, I understand this can be overwhelming and there is a lot to learn. Can
we try one more thing before you split off and study solo? Let's continue
with the rotation, but **when it's your turn to navigate, if you don't know what
to do, we can take as much as the entire rotation for learning. Ask your
questions, we'll whiteboard, we'll teach. Then, when the timer is up we will go
back to the code.**

Caution: this can come accross as "don't ask questions when it's not your turn".
It's supposed to be the opposite. It's "we want you with us, and we will make 10 minutes out of
every hour exclusively for you to ask questions and have our undivided
attention". The goal is to make a safe place for that team member to learn and
discover with you.

# Consequences

The mob makes progress on the work, the learning team member can participate
(and be useful!), and there are regular, dedicated times (once per round of
rotations) for the learning team member to be taught by the team.

A team member who feels overwhelmed by how much they have to learn can be
tempted to work on their own to learn (they don't want to slow the team down).
Without making space for it in the day, the team member may choose to study in
the evenings (even though they have been told they shouldn't) because they want
to "catch up" on their learning.

As the team member gains knowledge and confidence, they can transition to
navigating seamlessly. Or, they can navigate when they are working in an area of
the code / domain that they know enough to decide what to do next.

As a side effect, this sets the tone in the mob for investigating weird things.
When someone has a bad feeling about what's going on, and it's their turn to
navigate, they're used to taking a rotation for learning. "Actually can we dig
into this behaviour -- why is that happening? Shouldn't it be doing something
else? Does anyone know how this thing actually works?"

# Collaborators

 - [Navigate the Navigators](../patterns/Navigate%20The%20Navigators.md)
 - [Treasure Map](../patterns/Treasure%20Map.md)
