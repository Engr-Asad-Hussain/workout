import os

from livereload import Server


def videos():
    """
    •   WSL creates a symbolic link named videos in your project folder.
    •   It does NOT copy the files — the actual video files remain on D:.
    •   What you see in WSL (ls videos/) looks like the actual files, but it’s just a pointer to the real files on D:

    •   WSL shows the symlink content transparently.
    •   When you ls videos/, you see 1.mp4, 2.mp4, etc.
    •   But no extra disk space is used in WSL’s filesystem.
    •   You can check the actual file sizes on your WSL partition: "du -sh videos/"

    How to remove symlink
    •   Go to your project folder:
    •   ls -l
    •   You might see something like: videos -> /mnt/d/Y-PK/Workout/videos
    •   Run: rm videos
    •   That will remove only the symlink.
    •   The actual videos on D: will remain untouched.
    """
    os.execvp("ls", ["ln", "-s", "/mnt/d/Y-PK/Workout/videos", "videos"])


def watch_app() -> None:
    server = Server()
    server.watch("index.html")
    server.watch("index.css")
    server.serve(port=8000, host="0.0.0.0")


def app() -> None:
    os.execvp(
        "python",
        ["python", "-m", "http.server", "8000"],
    )


if __name__ == "__main__":
    watch_app()
