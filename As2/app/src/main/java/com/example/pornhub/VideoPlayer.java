package com.example.pornhub;

import android.net.Uri;
import android.os.Bundle;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;

import androidx.appcompat.app.AppCompatActivity;

public class VideoPlayer extends AppCompatActivity {
    private String pathToVideoFile;
    private VideoView videoView;
    private MediaController mediaController;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video_player);

        pathToVideoFile = getIntent().getExtras().getString("pathToVideoFile");
        videoView = findViewById(R.id.videoView);
        mediaController = new MediaController(this);

        _startVideo();
    }

    private void _startVideo() {
        try {
            Uri uri = Uri.parse(pathToVideoFile);
            videoView.setVideoURI(uri);
            videoView.setMediaController(mediaController);
            videoView.requestFocus();
            mediaController.setAnchorView(videoView);
            videoView.start();
        } catch (Exception exception) {
            Toast.makeText(this, "Video doesn't exist.", Toast.LENGTH_SHORT).show();
        }
    }
}