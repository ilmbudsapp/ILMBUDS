package com.ilmbuds.app;

import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;
import android.webkit.WebChromeClient;
import android.webkit.JavascriptInterface;
import android.view.ViewGroup;
import androidx.activity.ComponentActivity;
import androidx.activity.compose.ComponentActivityKt;
import androidx.compose.foundation.layout.Column;
import androidx.compose.foundation.layout.fillMaxSize;
import androidx.compose.foundation.layout.fillMaxWidth;
import androidx.compose.foundation.layout.height;
import androidx.compose.runtime.Composable;
import androidx.compose.ui.Modifier;
import androidx.compose.ui.platform.LocalContext;
import androidx.compose.ui.unit.dp;
import androidx.compose.ui.viewinterop.AndroidView;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.ilmbuds.app.ui.theme.ILMBUDSappTheme;

public class MainActivity extends ComponentActivity {
    // 🔑 GLOBALNE REFERENCE (ChatGPT preporuka)
    private InterstitialAd mInterstitialAd = null;
    private RewardedAd mRewardedAd = null;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // Initialize AdMob
        MobileAds.initialize(this, initializationStatus -> {
            Log.d("ILMBUDS", "✅ AdMob initialized successfully!");
        });

        // 🔑 UČITAJ REKLAME ODMAH (ChatGPT preporuka)
        loadInterstitialAd();
        loadRewardedAd();

        ComponentActivityKt.setContent(this, content -> {
            ILMBUDSappTheme.INSTANCE.invoke(content, (composer, i) -> {
                MainScreen(composer, i);
                return null;
            }, composer, 0);
            return null;
        });
    }

    // 🔑 PRAVILNO UČITAVANJE INTERSTITIAL (ChatGPT)
    private void loadInterstitialAd() {
        AdRequest adRequest = new AdRequest.Builder().build();

        InterstitialAd.load(this, "ca-app-pub-3940256099942544/1033173712", adRequest,
            new InterstitialAdLoadCallback() {
                @Override
                public void onAdLoaded(InterstitialAd ad) {
                    mInterstitialAd = ad;
                    Log.d("ILMBUDS", "✅ Interstitial PRODUCTION ad loaded!");
                    
                    // Add callback for lifecycle
                    mInterstitialAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                        @Override
                        public void onAdDismissedFullScreenContent() {
                            Log.d("ILMBUDS", "Interstitial dismissed, loading next...");
                            mInterstitialAd = null;
                            loadInterstitialAd(); // 🔑 UČITAJ SLEDEĆI
                        }
                        
                        @Override
                        public void onAdFailedToShowFullScreenContent(AdError adError) {
                            Log.e("ILMBUDS", "Interstitial failed to show: " + adError.getMessage());
                            mInterstitialAd = null;
                            loadInterstitialAd(); // 🔑 POKUŠAJ PONOVO
                        }
                        
                        @Override
                        public void onAdShowedFullScreenContent() {
                            Log.d("ILMBUDS", "✅ Interstitial ad shown successfully!");
                        }
                    });
                }
                
                @Override
                public void onAdFailedToLoad(LoadAdError adError) {
                    Log.e("ILMBUDS", "❌ Interstitial PRODUCTION failed: " + adError.getMessage());
                    Log.e("ILMBUDS", "Error code: " + adError.getCode() + ", Domain: " + adError.getDomain());
                    mInterstitialAd = null;
                }
            });
    }

    // 🔑 PRAVILNO UČITAVANJE REWARDED (ChatGPT)
    private void loadRewardedAd() {
        AdRequest adRequest = new AdRequest.Builder().build();

        RewardedAd.load(this, "ca-app-pub-3940256099942544/5224354917", adRequest,
            new RewardedAdLoadCallback() {
                @Override
                public void onAdLoaded(RewardedAd ad) {
                    mRewardedAd = ad;
                    Log.d("ILMBUDS", "✅ Rewarded PRODUCTION ad loaded!");
                    
                    // Add callback for lifecycle
                    mRewardedAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                        @Override
                        public void onAdDismissedFullScreenContent() {
                            Log.d("ILMBUDS", "Rewarded dismissed, loading next...");
                            mRewardedAd = null;
                            loadRewardedAd(); // 🔑 UČITAJ SLEDEĆI
                        }
                        
                        @Override
                        public void onAdFailedToShowFullScreenContent(AdError adError) {
                            Log.e("ILMBUDS", "Rewarded failed to show: " + adError.getMessage());
                            mRewardedAd = null;
                            loadRewardedAd(); // 🔑 POKUŠAJ PONOVO
                        }
                        
                        @Override
                        public void onAdShowedFullScreenContent() {
                            Log.d("ILMBUDS", "✅ Rewarded ad shown successfully!");
                        }
                    });
                }
                
                @Override
                public void onAdFailedToLoad(LoadAdError adError) {
                    Log.e("ILMBUDS", "❌ Rewarded PRODUCTION failed: " + adError.getMessage());
                    Log.e("ILMBUDS", "Error code: " + adError.getCode() + ", Domain: " + adError.getDomain());
                    mRewardedAd = null;
                }
            });
    }

    // 🔑 PRAVILNO PRIKAZIVANJE INTERSTITIAL (ChatGPT)
    private void showInterstitialAd() {
        if (mInterstitialAd != null) {
            Log.d("ILMBUDS", "📺 Showing PRODUCTION interstitial ad...");
            mInterstitialAd.show(this);
            mInterstitialAd = null; // 🔑 POSLE PRIKAZA NULL
            loadInterstitialAd(); // 🔑 UČITAJ SLEDEĆI
        } else {
            Log.d("ILMBUDS", "⚠️ Interstitial not ready yet");
        }
    }

    // 🔑 PRAVILNO PRIKAZIVANJE REWARDED (ChatGPT)
    private void showRewardedAd() {
        if (mRewardedAd != null) {
            Log.d("ILMBUDS", "🎬 Showing PRODUCTION rewarded ad...");
            mRewardedAd.show(this, rewardItem -> {
                int rewardAmount = rewardItem.getAmount();
                String rewardType = rewardItem.getType();
                Log.d("ILMBUDS", "💰 PRODUCTION reward earned: " + rewardAmount + " " + rewardType);
            });
            mRewardedAd = null; // 🔑 POSLE PRIKAZA NULL
            loadRewardedAd(); // 🔑 UČITAJ SLEDEĆI
        } else {
            Log.d("ILMBUDS", "⚠️ Rewarded not ready yet");
        }
    }

    // 🔑 JAVASCRIPT BRIDGE (ChatGPT preporuka)
    public class WebAppInterface {
        @JavascriptInterface
        public void showInterstitialAd() {
            Log.d("ILMBUDS", "🎯 WebApp requesting PRODUCTION interstitial...");
            runOnUiThread(() -> {
                MainActivity.this.showInterstitialAd(); // 🔑 POZOVI METODU
            });
        }

        @JavascriptInterface
        public void showRewardedAd() {
            Log.d("ILMBUDS", "🎁 WebApp requesting PRODUCTION rewarded...");
            runOnUiThread(() -> {
                MainActivity.this.showRewardedAd(); // 🔑 POZOVI METODU
            });
        }
    }
}

// COMPOSE KOMPONENTE ZA UI
@Composable
public static void MainScreen(androidx.compose.runtime.Composer composer, int i) {
    Column.INSTANCE.invoke(
        Modifier.INSTANCE.fillMaxSize(),
        null, null, null, null,
        content -> {
            // WebView takes most space
            WebViewScreen(
                Modifier.INSTANCE
                    .fillMaxWidth()
                    .weight(1f),
                content, 0
            );

            // PRODUCTION Banner Ad na dnu
            BannerAdView(
                Modifier.INSTANCE
                    .fillMaxWidth()
                    .height(100),
                content, 0
            );
            return null;
        },
        composer, i
    );
}

@Composable
public static void WebViewScreen(Modifier modifier, androidx.compose.runtime.Composer composer, int i) {
    android.content.Context context = LocalContext.INSTANCE.getCurrent(composer, 0);
    
    AndroidView.INSTANCE.invoke(
        factory -> {
            WebView webView = new WebView(context);
            webView.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            ));

            WebSettings settings = webView.getSettings();
            settings.setJavaScriptEnabled(true);
            settings.setDomStorageEnabled(true);
            settings.setLoadWithOverviewMode(true);
            settings.setUseWideViewPort(true);
            settings.setSupportZoom(false);
            settings.setBuiltInZoomControls(false);
            settings.setDisplayZoomControls(false);
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            settings.setCacheMode(WebSettings.LOAD_NO_CACHE);

            webView.setWebViewClient(new WebViewClient());
            webView.setWebChromeClient(new WebChromeClient());

            // 🔑 KRITIČNO: JavaScript Interface za native reklame
            MainActivity mainActivity = (MainActivity) context;
            webView.addJavascriptInterface(mainActivity.new WebAppInterface(), "AndroidBridge");
            Log.d("ILMBUDS", "🔗 AndroidBridge connected for PRODUCTION ads");

            webView.loadUrl("https://ilmbuds-agron6922.replit.app/");
            return webView;
        },
        update -> {
            WebView webView = (WebView) update;
            webView.reload();
            return null;
        },
        modifier,
        composer, i
    );
}

@Composable
public static void BannerAdView(Modifier modifier, androidx.compose.runtime.Composer composer, int i) {
    android.content.Context context = LocalContext.INSTANCE.getCurrent(composer, 0);

    AndroidView.INSTANCE.invoke(
        factory -> {
            AdView adView = new AdView(context);
            // TVOJ PRODUCTION BANNER ID (koji već radi!)
            adView.setAdUnitId("ca-app-pub-3940256099942544/6300978111");
            adView.setAdSize(AdSize.LARGE_BANNER);
            
            AdRequest adRequest = new AdRequest.Builder().build();
            adView.loadAd(adRequest);
            
            Log.d("ILMBUDS", "🎯 PRODUCTION Banner ad loading...");
            return adView;
        },
        modifier,
        composer, i
    );
}