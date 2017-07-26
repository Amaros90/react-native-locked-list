package com.lockedlist;

import android.view.View;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.scroll.ReactScrollView;

public class LockedScrollView extends ReactScrollView {

    private static boolean _enabled = true;
    public static boolean _shouldScroll = false;

    public LockedScrollView(ReactContext context) {
        super(context);
    }

    public void setEnabled(boolean value) {
        _enabled = value;
    }

    public void setShouldScroll(boolean shouldScroll) {
        _shouldScroll = shouldScroll;
    }

    @Override
    public void addView(View child, int index) {
        super.addView(child, index);


        this.getChildAt(0).addOnLayoutChangeListener(new View.OnLayoutChangeListener() {
            @Override
            public void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {
                if (!_enabled) return;

                LockedScrollView parentScroll = ((LockedScrollView)v.getParent());


                if (_shouldScroll)
                    parentScroll.scrollTo(parentScroll.getScrollX(), parentScroll.getScrollY() + (bottom - oldBottom));
                }
        });
    }



}
