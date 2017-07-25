package com.lockedlist;

import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.scroll.ReactScrollView;
import com.facebook.react.views.view.ReactViewGroup;

public class LockedScrollView extends ReactScrollView {

    //private Object _foo = new Object();
    public static boolean _shouldScroll = true;
    private static boolean _isLocked = true;
    public static View lastTopView = null;

    public LockedScrollView(ReactContext context) {
        super(context);
    }

    public static void setShouldScroll(boolean value) {
        _shouldScroll = value;
    }

    public void setIsLocked(boolean value) {
        _isLocked = value;
    }

    @Override
    public void addView(View child, int index) {
        super.addView(child, index);

        this.getChildAt(0).addOnLayoutChangeListener(new View.OnLayoutChangeListener() {
            @Override
            public void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {
            LockedScrollView parentScroll = ((LockedScrollView)v.getParent());

            if (((ReactViewGroup)v).getChildAt(0) != lastTopView)
//            if (parentScroll._isLocked && _shouldScroll)
                parentScroll.scrollTo(parentScroll.getScrollX(), parentScroll.getScrollY() + (bottom - oldBottom));
            }
        });
    }
}
