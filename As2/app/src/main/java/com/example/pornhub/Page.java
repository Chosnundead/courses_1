package com.example.pornhub;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class Page extends AppCompatActivity {
    private String path, title, description;
    private TextView titleTextView, descriptionTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_page);

        path = getIntent().getExtras().getString("path");
        title = getIntent().getExtras().getString("title");
        description = getIntent().getExtras().getString("description");

        titleTextView = findViewById(R.id.title);
        descriptionTextView = findViewById(R.id.description);
        titleTextView.setText(title);
        descriptionTextView.setText(description);
    }


    private void _startVideoPlayerActivity(String pathToVideoFile) {
        Intent intent = new Intent(this, VideoPlayer.class);
        intent.putExtra("pathToVideoFile", pathToVideoFile);
        startActivity(intent);
    }

    public void onButtonClick(View view) {
        _startVideoPlayerActivity(path);
    }
}