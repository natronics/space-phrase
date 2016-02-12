# Space Phrase

Create a [passphrase](https://xkcd.com/936/) made of famous space words, for example names of rockets and astronauts.<sup>1</sup>

Example: <https://natronics.github.io/space-phrase/>

### How to use:

Download the code. To use, for example, in a site like this include it and call `phrase`:

``` html
<script src="space-phrase.js"></script>
<script>
    // Get a random space phrase:
    console.log(phrase({'deliminator': '-'}));
</script>
```

--------------------------------------------------------------------------------

 1. Maybe don't actually use this for an important password<sup>2</sup>
 2. <small>Seriously, the word list is small and public. Still, it's fun though</small>
