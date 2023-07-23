# Get the current working directory
current_path="$PWD"

# print Current working directory
echo "Current path: $current_path"

# Join current_path with /blog/client
client_path="$current_path/blog/client"

# Start first Node.js service in a new terminal window/tab
# gnome-terminal --tab --title="client" --command="bash -c 'cd \"$client_path\"; npm run dev; exec bash'"

# gnome-terminal --tab --title="client" --command="bash -c 'cd \"$client_path\"; npm start; exec bash'"

# Open integrated terminal in Visual Studio Code
# gnome-terminal --tab --title="client" --command="bash -c 'cd \"$service1_path\"; npm start; exec bash'"

# xterm -T "client" -e "bash -c 'cd \"$client_path\"; npm start'"

gnome-terminal -- bash -c "cd \"$client_path\"; npm start"
