
# First push: Gather explicit problem information.
    Gathering all the most obvious stuff into my I/O Rules

    # What is the input(s)?
    # What is the expected output(s)?
    # What are the explicit rules?

# Second push: Gather implicit information and rules.

    # What are some of the patterns?
      - For repeating patterns what if I go past one edge of the pattern?

    # Work on examples w the Happy Path

    # Generate some edge case tests
      - Invalid Input or Values (data types or values) are numbers floats?
      - Emptiness (null/nil, '', [], {})
      - Boundary conditions (max 20 chars & add in 21 chars)
      - Repetition/duplication
      - Uppercase/Lowercase strings/chars
      - Too few/many args, no arguments? arguments.length === 0

# Clarify w/ Interviewer

    # Do I need to worry about any other input data types?
      - Normal and - Special (NaN, +/- Infinity, .567, -3, [1,,3], +0, -0)
    # How should I handle bad input/failures?
      - Return a special VALUE (null/nil, '', [], {}) or throw an ERROR
      
# Are there any final edge cases that I need to add?
