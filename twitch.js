<!-- Add a placeholder for the Twitch embed -->
<div id="twitch-embed"></div>

<!-- Load the Twitch embed script -->
<script src="https://www.twitch.tv/bleach1998"></script>

<!-- Create a Twitch.Player object. This will render within the placeholder div -->
<script type="text/javascript">
  new Twitch.Player("twitch-embed", {
    video: "2248279709"
  });
</script>
