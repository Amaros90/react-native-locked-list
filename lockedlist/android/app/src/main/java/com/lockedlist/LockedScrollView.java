package com.lockedlist;

import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.scroll.ReactScrollView;

public class LockedScrollView extends ReactScrollView {

    public static boolean ShouldScroll = false;
    public static boolean IsLocked = true;

    public LockedScrollView(ReactContext context) {
        super(context);
        //super.setFillViewport(true);
    }

    @Override
    public void addView(View child, ViewGroup.LayoutParams params) {
        super.addView(child, params);

        this.getChildAt(0).addOnLayoutChangeListener(new View.OnLayoutChangeListener() {
            @Override
            public void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {

                LockedScrollView parentScroll = ((LockedScrollView)v.getParent());

                if (parentScroll.IsLocked && parentScroll.ShouldScroll) {
                    parentScroll.scrollTo(parentScroll.getScrollX(), parentScroll.getScrollY() + (bottom - oldBottom));
                }
            }
        });
    }
}
