// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
import.meta.glob("./**/*_channel.js", { eager: true });
