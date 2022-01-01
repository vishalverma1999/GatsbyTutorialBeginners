so sometimes you might want to use
static assets like images or extra style
sheets or even javascript files that
don't really fit into the gatsby
workflow of importing
and processing the files inside this
source folder right here
now for those assets that don't fit into
that workflow we have
the static folder and if we open that we
can already see
this fav icon right here so anything
you want to be made available as a
static asset to the browser
can go inside this static folder for
example i could just place an image
inside there and it would then be made
public
to the browser if i place my image
inside
the source folder somewhere it wouldn't
be made public
to the browser only things we place in
here are going to be made accessible to
the browser directly
so what i'm going to do to demo this is
just drag in an image
into this static folder now this image
was from adobe
and what i've done is uploaded the
watermarked image to my
repo right here so if you want to get it
go to the lesson seven
branch and then go into static and then
you can get this banner
right here so this is the file i'm using
all right
so now this thing right here will be
made accessible
to the browser and the way gatsby does
this is by putting this thing
inside the public folder and this
remember is the thing that's served
to the browser and we can see it's
already copied it over because anything
inside this public folder is made
accessible to the browser
so anything we place inside static we
can reach from the browser directly
and if i was just to go to this
banner.png
directly we should see it right here
that works
all right cool so what if we want to use
that inside a component
well let's go into source then into
pages and i'm going to go into
the index component to use this all
right then so
after this div right here i'm going to
do an image
tag like so now the source is just
forward slash
banner.png and then the alt i'm just
going to say
site banner like so and if we save this
and preview go to the home page we
should see this gigantic image now of
here it works
now what i want to do is just add a
little style to this so
i'm going to do that directly in line on
this element
so the way we do this is passing in an
object into the style tag
and then i'm just going to say max width
camel case
is going to be 100 like so
so if i save this and preview hopefully
yep it makes it a little bit smaller
and that looks a bit better so you could
also place other file types inside
this static folder right here images
javascript files css files etc and they
would all be made available
to the browser however there are
drawbacks to using assets this way
just putting them in the static 
it means they're tak
of the whole gatsby processing wo
so they're not pro
minified or optimized for the web 
so later on in the course we'll ac
see a better way 
images in gatsby that will o
a
for us to do things l
multiple image resolutions 
diffe
and then only load in the ones that we
need for our current device
size the same is true for any css and
javascript files that you put in here as
well inside the static folder
they are not going to be minified or
optimized in any way when we build
our application unlike when we use css
inside
the source folder over here when it is
optimized for the web but for any static
assets that you don't need to be
processed
or optimized you can use this static
folder
for that
