package com.lockedlist;

import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.views.scroll.ReactScrollView;

public class LockedScrollView extends ReactScrollView {

    private Object _foo = new Object();
    private boolean _shouldScroll = true;
    private boolean _isLocked = true;

    public LockedScrollView(ReactContext context) {
        super(context);
    }

    public void setShouldScroll(boolean value) {
        synchronized(_foo) {
            _shouldScroll = value;
        }
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
                synchronized(_foo) {
                    if (parentScroll._isLocked && _shouldScroll) {
                        parentScroll.scrollTo(parentScroll.getScrollX(), parentScroll.getScrollY() + (bottom - oldBottom));
                    }
                }
            }
        });
    }
}
